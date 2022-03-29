import { CSpinner } from "@coreui/react";

const Load = (props) => {
  return (
    <div className="col-sm-12">
      <div className="shadow-card">
        <div className="card-body">
          <div style={{ display: "flex", justifyContent: "center" }}>
            {props.title} &nbsp;
            <CSpinner size="sm" color="success" variant="grow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Load;
