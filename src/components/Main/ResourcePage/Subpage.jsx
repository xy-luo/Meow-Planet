import subpageList from "./subpageList";

function Subpage({subpage}) {
    return (
        <div className="subpage">
            <h2 className="subpage-title">{subpageList[subpage].title}</h2>
            <div className="subpage">
                {subpageList[subpage].text}
            </div>
        </div>
    );
}

export default Subpage;