import "../css/Settings.css";

const Settings = (props) => {
  if (props.show == false) {
    return null;
  } else {
      
      // select search provider
    return (
      <div>
        <label class="switch">
          <input type="checkbox" onClick={() => toggle}/>
          <span class="slider round"></span>
        </label>
      </div>
    );
  }
};

export default Settings;
