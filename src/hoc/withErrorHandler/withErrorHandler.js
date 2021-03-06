import React,{Component} from "react";
import Auxx from "../Auxx/Auxx";
import Modal from "../../components/UI/Modal/modal";


const withErrorHandler  =(WrappedComponent,axios)=>{

    return class extends Component {
        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render(){
            return (
                <Auxx>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxx >
            )
        }

    }
}
export default withErrorHandler;