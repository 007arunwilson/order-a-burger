import React,{Component,Fragment} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const WithAxiosErrorHandler = (WrappedComponent,axiosInstance)=>{

    return class extends Component{

        state = {error:null};
        
        componentDidMount(){

           axiosInstance.interceptors.response.use(response=>response,error=>{

                console.log('Axios catched error : ',error,error.message);
                this.setState({error:error});
                return Promise.reject(error);

           });

        }

        clearErrorStateHandler(){

           this.setState({error:null});

        }

        render (){

            return (
                <Fragment>
                    <Modal open={this.state.error?true:false} closeHandler={this.clearErrorStateHandler.bind(this)} >
                    {this.state.error?<p style={{textAlign:'center'}} >{this.state.error.message}</p>:null}
                    </Modal>
                    <WrappedComponent/>
                </Fragment>
            );

        }

    }

}

export default WithAxiosErrorHandler;