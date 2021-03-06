import React from 'react';
import Store from './PersistStore.jsx';
import Game from './Game.jsx';
import {createFileWithJSONContent, createFileWithHTML} from './../../utilities/fileUtils.js';
import {Link} from 'react-static';
import {buildFiles, getSavedGameIds, getLocalhostIterator} from './../../utilities/localStorageUtils.js';
import {connect} from 'react-redux';
import {listFilesByAppProp, getFile, listFilesByName, exportFile, createAFile, editFile} from './../apis/DriveInterface.js';
import IconButton from './../UI/elements/IconButton.jsx';
import LoadGameView from './LoadGameView.jsx';
import * as MyLog from 'MyLog';

if (typeof window === 'undefined') {
    global.window = {}
}

function getStoreName(game, id){
    MyLog.style(`website load.jsx getStoreName id ${id} game ${game} storeName => ${game}-${id}`, 'green');
    return `${game}-${id}`
}

function getMetaName(meta, game, id){
    MyLog.style(`website load.jsx getMetaName id ${id} game ${game} MetaName => ${meta}:${game}-${id}`, 'green');
    return `${meta}:${game}-${id}`
}
const DATE = 'date',
      DESC = 'desc',
      DRIVE_FILE_KEY = 'game',
      DRIVE_FILE_PROP_ID = 'gameId',
      SAVE_NAMES = ['rose','violet','lilly'];
class Load extends React.Component{
    constructor(props){
        super(props);
        this.onNewGame = this.onNewGame.bind(this);
        this.onLoadGame = this.onLoadGame.bind(this);
        this.syncSaves = this.syncSaves.bind(this);

        this.state = {
            id: null,
            local: [],
            synced: false,
            syncing: false,
            log:[]
        }
    }

    componentDidMount(){
        this.registerMenuButtons(this.state.fileId);
        this.setState({
            local: this.getLocalSaves()
        })
        

    }
    getLocalSaves(){
        let regexp = `${this.props.id}-(${SAVE_NAMES.join('|')})$`;
        let ids = getSavedGameIds(getLocalhostIterator(), new RegExp(regexp), (file)=>{
            let parts = file.split("-");
            return parts[1];
        })
        let files = buildFiles(ids, [
            {
                key: 'date',
                getName: (id) => {getMetaName(DATE,this.props.id, id)}
            },
            {
                key: 'desc',
                getName: (id) => {getMetaName(DESC,this.props.id, id)}
            }
        ], {hello: 'world'});
        return files;

    }
    componentWillUnmount(){
        if(this.props.fileId){
            this.saveLocalMeta();
            this.saveGame(this.props.fileId);
        }
    }
    componentDidUpdate(prevProps, prevState){
       // console.log("should sync saves? is gapi sighned in? " + this.props.gapi.isSignedIn + " is it syncing? " + this.state.syncing);
        if(this.props.gapi.isSignedIn && !this.state.synced && !this.state.syncing){
               //this.syncSaves();
               //createAFile();
            //    editFile('1860xM3H6oJa2juElgM2ccpdNKaG4812x',
            //     `<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type">
            //     </head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt">
            //     <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;
            //     line-height:1.15;orphans:2;widows:2;text-align:center">
            //     <span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;
            //     font-family:&quot;Arial&quot;;font-style:normal">OMG
            //     </span></p>
            //     <p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;
            //     widows:2;text-align:left"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;
            //     font-size:17pt;font-family:&quot;Arial&quot;;font-style:normal">Daily moisturizer! Commentab;e</span></p></body></html>`)
            //    .then(r =>{
            //         console.log(`edit file result`, r);
            //    })
            //    .catch(e => {
            //        console.error(`edit file error `, e);
            //    });
            //exportFile();
        }
        if(prevState.fileId !== this.state.fileId){
            this.registerMenuButtons(this.state.fileId)
        }
    }
    //listFilesByName = (names, mimeType)   exportFile = (id, mimeType) 
    exportFile(){
        console.log(`exporting charisma beginning`);
        listFilesByName(['Charisma'], 'application/vnd.google-apps.document')
        .then(r => {
            let id = r.result.files[0].id;
            return exportFile(id, 'text/html');
        })
        .catch(e => {
            console.log('exporting charisma error',e);
        })
    }


//"<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head><body style="background-color:#ffffff;padding:72pt 72pt 72pt 72pt;max-width:468pt"><p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:center"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:24pt;font-family:&quot;Arial&quot;;font-style:normal">OMG</span></p><p style="padding:0;margin:0;color:#000000;font-size:11pt;font-family:&quot;Arial&quot;;line-height:1.15;orphans:2;widows:2;text-align:left"><span style="color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:&quot;Arial&quot;;font-style:normal">Daily moisturizer!</span></p></body></html>"
    

    saveGame(fileId, driveId /* if null, must retrieve*/, attemptCount = 0){ //props.id->labgame, fileId->this.state.fileId->rose
        if(driveId){
            this.uploadFile(driveId, fileId);
        }else{
            let filename = getStoreName(this.props.id, fileId);         
            console.log(`saveGame listing file by filename ${filename}`, r);
            listFilesByAppProp(DRIVE_FILE_KEY, [filename])
            .then((response) => {
                    let list = response.result.files;
                    if(list){
                        let id = list[0]?list[0].id:null;
                        //if file exists, patch it g4:35d7c7bc-8d4d-0686-55f7-29e91a41175e:date
                        // let updatedfile = localStorage.getItem('persist:g4-35d7c7bc-8d4d-0686-55f7-29e91a41175e')
                        this.uploadFile(id, fileId);
                        this.syncFinished();
                    }
                }
            )
            .catch(e => {
                //make file if doesn't exist?
                
                this.state.log.push(`failed to upload to cloud, status ${e.status}`);
                if(e.status === 404){
                    console.log(`saveGame failed with 404, creating file`, r);
                    //make a new file, call this function again with its id
                    createAFile('application/vnd.google-apps.document', 'text/html', filename, 'body text', )
                    .then(r => {
                        console.log(`create file result`, r);
                        let id = r.result.id;
                    })
                    .catch( e => {
                        console.log(`saveGame create file error`, e);
                    })
                }else{
                    this.syncFinished();
                }
                
            })
        }
    }
    uploadFile(driveId, fileId){
        let localStorage = window.localStorage;
        let filename = getStoreName(this.props.id, fileId);
        let updatedfile = localStorage.getItem('persist:' + filename);
        //TODO break into json file maker, and http request builder
        this.state.log.push(`building file request for cloud upload`);
        try{
            editFile(driveId, updatedfile, {DRIVE_FILE_KEY: filename, DRIVE_FILE_PROP_ID: fileId})
            .then(r => {
                console.log(`upload file response ${driveId}`, r);
            })
            .catch(e => {
                console.log(`upload file error ${driveId}`, e);
            });
        }catch(e){
            console.error("uploadFile failed",e);
        }
        
    }
//{"sim":"{\"view\":\"intro\",\"step\":0,\"measurement\":{},\"simulation\":{},\"flags\":{\"measureRadiation\":null},\"data\":{},\"log\":[],\"math\":{}}","ecs":"{\"named\":{},\"hasLocation\":{},\"hasPassagesTo\":{},\"math\":{}}","questions":"{}","_persist":"{\"version\":-1,\"rehydrated\":true}"}
    syncSaves(id, overwriteLocal /* optional */){
        if(this.props.gapi){
            if(id){
                this.state.log.push('beginning sync with google drive to fetch save files');
                this.setState({
                    syncing:true
                })
                    //let localStorage = window.localStorage;
                let names = Array.isArray(id)? id.map(n => {
                    return getStoreName(this.props.id, n);
                }): [id];
                listFilesByAppProp(DRIVE_FILE_KEY, names)
                .then((response) => {
                        console.log("load syncSaves response", response);
                        let list = response.result.files;
                        
                        //console.log("loadinggame, drive files found: " + list.length);
                        this.state.log.push(`recieved ${list.length} files`);
                        if(list){
                            if(list.length === 0){
                                //first time uploading to cloud
                                this.state.log.push(`0 files found on drive, uploading new game ${this.state.fileId} to cloud for first time`);
                                this.saveGame(this.state.fileId);
                            }
                            list.map(item =>{
                                //extract driveId, and gameId
                                let driveId = item.id;
                                let gameId = item.appProperties[DRIVE_FILE_PROP_ID];
                                let gameName = item.appProperties[DRIVE_FILE_KEY];
                                this.state.log.push(`syncSave comparing file driveId: ${driveId} gameId: ${gameId} gameName: ${gameName}`);
                            // console.log(`syncSave comparing file driveId: ${driveId} gameId: ${gameId} gameName: ${gameName}`);
                                //let file = this.downloadSave(item);
                            
                                if(overwriteLocal && this.isLocalLater(item)){
                                //  console.log("drive file modified later than local file, downloading");
                                    this.state.log.push(`most recent file is ahead of local file, overwriting local file`);
                                    getFile(item.id).then(res => {
                                    //  console.log('syncSave test downloaded file  for ' +gameName, res);
                                        this.overwriteLocalSave(gameId, gameName, res.result);
                                    }).catch(e => {
                                        //console.log('syncSaves getFile catch block error', e);
                                        this.state.log.push(`failed to retrieve file ` + driveId);
                                        throw new Error('error during getFile call to google drive', e);
                                    })
                                }else{
                                // console.log("local file is later than drive file, uploading to cloud");
                                    this.state.log.push(`most recent file is behind local file, overwriting cloud file`);
                                    this.saveGame(gameId, driveId);    
                                }
                            })
                        }else{
                            throw new Error('syncing failed, no load games found');
                        }
                })
                .catch((err) => {
                    console.log("syncSaves catch block called, throwing error", err);
                    this.syncFinished();
                })
            }else{
                console.warn('will not sync when fileId is undefined');
            }
        }else{
            console.warn(`not signed in, cannot upload`);
        }   
    }
    syncFinished(){
        // this.state.log.push(`syncing finished`);
        this.setState({
            syncing:false,
            synced: true,
            log: [
                ...this.state.log
            ]
        })
    }
    isLocalLater(driveFile){
        let localStorage = window.localStorage;
        let id = driveFile.appProperties[DRIVE_FILE_PROP_ID];
        let driveDate = new Date(driveFile.modifiedTime);
        let localTime = localStorage.getItem(getMetaName(DATE, this.props.id, id));
        return driveDate.getTime()>localTime;
    }
    displayDate(time){
        return new Date(time).toUTCString();
    }

    overwriteLocalSave(id, gameName, body){
        let localStorage = window.localStorage;
        let stringed = JSON.stringify(body);
        localStorage.setItem('persist:' + gameName, stringed);
        this.saveLocalMeta(id);
        this.setState({
            syncing:false,
            synced: true,
            saveConflict: null,
            error: null
        })
    }
    onNewGame(id){
        let filename = getStoreName(this.props.id, id);
        this.saveLocalMeta(id);
        this.setState({
            filename,
            fileId: id,
            local: this.getLocalSaves()
        })
        this.registerMenuButtons(id);
    }
    
    saveLocalMeta(id){
        let date = new Date();
        let localStorage = window.localStorage;
        //save metadata locally
        localStorage.setItem(getMetaName(DATE, this.props.id, id), date.getTime());
        localStorage.setItem(getMetaName(DESC, this.props.id, id), 'a game description');
    }
    onLoadGame(id){
        //use game + id as filename, set as filename
        let filename = getStoreName(this.props.id, id);
        console.log("load load game "+id+" name: " + filename);
        this.setState({
            filename,
            fileId: id
        })
        this.registerMenuButtons(id);
    }
    registerMenuButtons(fileId){
        if(fileId){
            this.props.registerMenuItem([
                {
                    key: 'sync',
                    id: 'none',
                    position: 'right',
                    text: 'sync',
                    component: <IconButton hoverKey={'primary'} className={'no-fileId'} key={'none'} width={'100%'} round={true} icon="sync" disabled />
                },
                {
                    key: 'cloud',
                    position: 'right',
                    text: 'upload',
                    component: <IconButton  key={'cloud'} round={true} width={'100%'} bgColor="lightgrey" icon="cloud"  onInput={()=>{
                        this.saveGame(this.state.fileId); //TODO decide whose responsibility it is to pick fileId
                        //this.syncSaves(fileId, false)
                    }}/>
                },
                {
                    key: 'back',
                    position: 'left',
                    component: <IconButton hoverKey={'primary'} key={'back'} round={true} icon="back" onInput={()=>{
                        this.setState({
                            fileId: null, filename: null
                        })
                    }}/>
                }
            ])
        }else{
            this.props.registerMenuItem([
                {
                    key: 'sync',
                    id: fileId,
                    position: 'right',
                    text: 'sync',
                    component: <IconButton hoverKey={'primary'} className={'fileId'} key={fileId} width={'100%'} round={true} icon="sync" onInput={()=>{
                        //console.log('load sync save button clicked! ' + fileId);
                        this.syncSaves(SAVE_NAMES, true)
                    }}/>
                },
                {
                    key: 'cloud',
                    position: 'right',
                    text: 'upload',
                    component: <IconButton key={'cloud'} round={true} width={'100%'} bgColor="lightgrey" icon="cloud" disabled/>
                },
                {
                    key: 'back',
                    position: 'left',
                    component: <Link to={'/games'}><IconButton key={'back'} round={true} icon="back" /></Link>
                }
            ])
        }
    }
    render(){
        console.log(`website game load filename ${this.state.filename}`, this.state);
        if(this.state.filename){
            //savefile={this.state.filename}
            return(
                <Store savefile={this.state.filename} reducers={this.props.reducers}>
                    {/* {this.props.children} */}
                    <Game filename={this.state.filename} gamename={this.props.id} game={this.props.game} settings={this.props.settings} />
                </Store>
              )
        }else{
            return(
                <div>
                    {/* <button onClick={()=>{
                        this.exportFile();
                    }}>go</button> */}
                    <LoadGameView syncing={this.state.syncing} saves={this.state.local} log={this.state.log} 
                        onNewGame={(id)=>{this.onNewGame(id)}} onLoadGame={(id)=>{this.onLoadGame(id)}} names={SAVE_NAMES} />
                </div>
            )
        }

    }
    
}

const mapStateToProps = (state) => {
    return {
        gapi: state.gapi
        //gapi: false
    }
}

Load.displayName = 'Load';
export default connect(mapStateToProps)(Load);