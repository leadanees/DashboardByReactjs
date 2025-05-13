import Header1 from "./mainpages/Header1";
import Widget1 from "./mainpages/Widget1";
import Widget2 from "./mainpages/Widget2";
import Widget3 from "./mainpages/Widget3";

const MainPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 p-0 m-0">
                    <Header1 />
                </div>
                <div className="col-md-12">
                    <Widget1 />
                </div>
                <div className="col-md-12">
                    <Widget2 />
                </div>
                <div className="col-md-12">
                    <Widget3 />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
