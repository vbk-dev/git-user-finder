import React, { Component } from 'react'

class Search extends Component {
    state = {
        name: ''
    }

    valueChangeHandler = event => this.setState({ [event.target.name]:event.target.value })

    formSubmitHandler = event => {
        event.preventDefault();
        if (this.state.name === ''){
            this.props.setAlert('Search field can not left blank!', 'danger');
        } else {
            this.props.fetchUsers(this.state.name);
            this.setState({name: ''});
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.formSubmitHandler}>
                    <input type="text" name='name' placeholder='Enter name here' 
                        className='my-2 form-control' value={this.state.name} onChange={this.valueChangeHandler} />
                    <input type="submit" className='btn btn-dark btn-block' value="Search"/>
                </form>
                {this.props.isClear ? <input type="button" value="Clear" onClick={this.props.clearUsers} className='btn btn-danger btn-block my-1' /> : null}
            </React.Fragment>
        );
    }
}

export default Search;