const Tab = (props) => {

    const {
        activeTab,
        onClickTab,
        label
    } = props;

    let className = "tabs-block__tabs-item";

    const onClick = () => {
        onClickTab(label);
    };

    if (activeTab === label) {
      className += " tabs-block__tabs-item--active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
}
export default Tab;