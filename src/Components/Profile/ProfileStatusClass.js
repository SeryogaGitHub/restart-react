import React from "react";

class ProfileStatusClass extends React.Component{
  state = {
    editMode: false,
    status: this.props.status
  };

  onActivateEdit = () => {
    this.setState({
      editMode: true
    })
  };

  onDeactivateEdit = (e) => {
    const {updateStatus} = this.props;

    this.setState({
      editMode: false
    });

    updateStatus(this.state.status);
  };

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const {status} = this.props;

    if(prevProps.status !== status){
      this.setState({
        status: status
      });
    }
  }

  render() {
    const {status} = this.props;

    return (
      <div className={"description"}>
        <h2>Описання</h2>

        {!this.state.editMode && <p onClick={this.onActivateEdit}>{status || "Пустий статус"}</p>}
        {this.state.editMode && <input type="text"
                                       onChange={this.onChangeStatus}
                                       onBlur={this.onDeactivateEdit}
                                       value={this.state.status}
                                       autoFocus={true}/>}
      </div>
    );
  }
};

export default ProfileStatusClass;
