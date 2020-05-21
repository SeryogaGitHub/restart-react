import React, {useState, useEffect} from "react";

const ProfileStatus = (props) => {
  const {updateStatus} = props;

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const onActivateEdit = () => {
    setEditMode(true);
  };

  const onDeactivateEdit = () => {
    setEditMode(false);

    updateStatus(status);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(status);
  }, [props.status]);

  return (
    <div className={"description"}>
      <h2>Описання</h2>

      {!editMode && <p onClick={onActivateEdit}>{status || "Пустий статус"}</p>}
      {editMode && <input type="text"
                                     onChange={onChangeStatus}
                                     onBlur={onDeactivateEdit}
                                     value={status}
                                     autoFocus={true}/>}
    </div>
  );
};

export default ProfileStatus;
