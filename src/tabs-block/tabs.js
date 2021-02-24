import Tab from './tab';
const { useState } = wp.element;

const Tabs = (props) => {

    const [activeTab, setActiveTab] = useState(props?.children[0]?.props?.label);
    
    const onClickTabItem = (tab) => {
        setActiveTab(tab);
    };

    const { children } = props;

    return (
        <div className="tabs-block">
            <ol className="tabs-block__tabs-list">
                {children?.map((child) => {
                    const { label } = child.props;
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClickTab={onClickTabItem}
                        />
                    );
                })}
            </ol>
            <div className="tabs-block__tabs-content">
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
      </div>
    );
}

export default Tabs;