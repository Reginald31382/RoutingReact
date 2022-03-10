import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

//use the param to look up an invoice and display more information
export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
    return (
      <main style={{padding: "1rem"}}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
          <button onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}>
            Delete
          </button>
        </p>
      </main>
    );
  }