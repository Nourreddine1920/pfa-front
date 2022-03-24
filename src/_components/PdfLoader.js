import React, { Component } from "react";
import pdf from "./pdf.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class MyPdf extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div >
        <nav
          // className="dash-btn"
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <button className="btn btn-info" onClick={this.goToPrevPage}>
            Prev
          </button>
          <button className="btn btn-info" onClick={this.goToNextPage}>
            Next
          </button>
        </nav>

        <div >
          <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={360}
              style={{ textAlign: "center" }}
            />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default MyPdf;
