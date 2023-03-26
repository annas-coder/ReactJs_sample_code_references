import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import React, { useEffect } from "react";

const UserAccess = () => {
  let backendData = [
    {
      role_Id: 1,
      roles: "MasterData",
      vendor: {
        resource_Id: 1,
        resources: "Vendor",
        isActive: false,
        parentId: 0,
        vendorList: {
          resource_Id: 2,
          isActive: false,
          resources: "VendorList",
          parentId: 1,
          addMaterial: {
            resource_Id: 4,
            isActive: false,
            resources: "AddMaterial",
            parentId: 2,
          },
          addVendor: {
            resource_Id: 3,
            isActive: false,
            resources: "AddVendor",
            parentId: 2,
          },
        },
        purchaseRequest: {
          resource_Id: 5,
          isActive: false,
          resources: "PurchaseRequest",
          parentId: 1,
          createPR: {
            resource_Id: 6,
            isActive: false,
            resources: "CreatePurchaseRequest",
            parentId: 1,
          },
          prApprover: {
            resource_Id: 7,
            isActive: false,
            resources: "ParchaseRequestApprove",
            parentId: 1,
          },
        },
        purchaseOrder: {
          resource_Id: 8,
          isActive: false,
          resources: "PurchaseOrder",
          parentId: 1,
        },
        purchaseInvoiceCreation: {
          resource_Id: 9,
          isActive: false,
          resources: "PurchaceInvoiceCreation",
          parentId: 1,
        },
        purchaseInvoiceClearance: {
          resource_Id: 10,
          isActive: false,
          resources: "PurchaceInvoiceClearing",
          parentId: 1,
        },
      },
      customer: {
        resource_Id: 11,
        isActive: false,
        resources: "Customer",
        parentId: 0,
        customerList: {
          resource_Id: 12,
          isActive: true,
          resources: "CustomerList",
          parentId: 11,
          addCustomer: {
            resource_Id: 13,
            isActive: true,
            resources: "AddCustomer",
            parentId: 12,
          },
        },
        salesRequest: {
          resource_Id: 14,
          isActive: false,
          resources: "SalesRequestList",
          parentId: 11,
          createSR: {
            resource_Id: 15,
            isActive: false,
            resources: "CreateSalesRequest",
            parentId: 14,
          },
          srApprover: {
            resource_Id: 16,
            isActive: false,
            resources: "SalesRequestApprove",
            parentId: 14,
          },
        },
        salesOrder: {
          resource_Id: 17,
          isActive: false,
          resources: "SalesOrder",
          parentId: 11,
        },
        salesInvoiceCreation: {
          resource_Id: 18,
          isActive: false,
          resources: "SalesInvoiceCreation",
          parentId: 11,
        },
        salesInvoiceClearing: {
          resource_Id: 19,
          isActive: false,
          resources: "SalesInvoiceClearing",
          parentId: 11,
        },
      },
      inventory: {
        resource_Id: 20,
        isActive: true,
        resources: "Inventory",
        parentId: 0,
        productList: {
          resource_Id: 21,
          isActive: true,
          resources: "ProductList",
          parentId: 20,
        },
      },
    },
    {
      role_Id: 2,
      roles: "Billing",
      vendor: {
        resource_Id: 1,
        resources: "Vendor",
        isActive: false,
        parentId: 0,
        vendorList: {
          resource_Id: 2,
          isActive: true,
          resources: "VendorList",
          parentId: 1,
          addMaterial: {
            resource_Id: 4,
            isActive: true,
            resources: "AddMaterial",
            parentId: 2,
          },
          addVendor: {
            resource_Id: 3,
            isActive: true,
            resources: "AddVendor",
            parentId: 2,
          },
        },
        purchaseRequest: {
          resource_Id: 5,
          isActive: true,
          resources: "PurchaseRequest",
          parentId: 1,
          createPR: {
            resource_Id: 6,
            isActive: true,
            resources: "CreatePurchaseRequest",
            parentId: 1,
          },
          prApprover: {
            resource_Id: 7,
            isActive: false,
            resources: "ParchaseRequestApprove",
            parentId: 1,
          },
        },
        purchaseOrder: {
          resource_Id: 8,
          isActive: false,
          resources: "PurchaseOrder",
          parentId: 1,
        },
        purchaseInvoiceCreation: {
          resource_Id: 9,
          isActive: true,
          resources: "PurchaceInvoiceCreation",
          parentId: 1,
        },
        purchaseInvoiceClearance: {
          resource_Id: 10,
          isActive: false,
          resources: "PurchaceInvoiceClearing",
          parentId: 1,
        },
      },
      customer: {
        resource_Id: 11,
        isActive: false,
        resources: "Customer",
        parentId: 0,
        customerList: {
          resource_Id: 12,
          isActive: true,
          resources: "CustomerList",
          parentId: 11,
          addCustomer: {
            resource_Id: 13,
            isActive: true,
            resources: "AddCustomer",
            parentId: 12,
          },
        },
        salesRequest: {
          resource_Id: 14,
          isActive: false,
          resources: "SalesRequestList",
          parentId: 11,
          createSR: {
            resource_Id: 15,
            isActive: false,
            resources: "CreateSalesRequest",
            parentId: 14,
          },
          srApprover: {
            resource_Id: 16,
            isActive: false,
            resources: "SalesRequestApprove",
            parentId: 14,
          },
        },
        salesOrder: {
          resource_Id: 17,
          isActive: false,
          resources: "SalesOrder",
          parentId: 11,
        },
        salesInvoiceCreation: {
          resource_Id: 18,
          isActive: false,
          resources: "SalesInvoiceCreation",
          parentId: 11,
        },
        salesInvoiceClearing: {
          resource_Id: 19,
          isActive: false,
          resources: "SalesInvoiceClearing",
          parentId: 11,
        },
      },
      inventory: {
        resource_Id: 20,
        isActive: true,
        resources: "Inventory",
        parentId: 0,
        productList: {
          resource_Id: 21,
          isActive: true,
          resources: "ProductList",
          parentId: 20,
        },
      },
    },
    {
      role_Id: 3,
      roles: "Treasurer",
      vendor: {
        resource_Id: 1,
        resources: "Vendor",
        isActive: false,
        parentId: 0,
        vendorList: {
          resource_Id: 2,
          isActive: true,
          resources: "VendorList",
          parentId: 1,
          addMaterial: {
            resource_Id: 4,
            isActive: true,
            resources: "AddMaterial",
            parentId: 2,
          },
          addVendor: {
            resource_Id: 3,
            isActive: true,
            resources: "AddVendor",
            parentId: 2,
          },
        },
        purchaseRequest: {
          resource_Id: 5,
          isActive: true,
          resources: "PurchaseRequest",
          parentId: 1,
          createPR: {
            resource_Id: 6,
            isActive: true,
            resources: "CreatePurchaseRequest",
            parentId: 1,
          },
          prApprover: {
            resource_Id: 7,
            isActive: false,
            resources: "ParchaseRequestApprove",
            parentId: 1,
          },
        },
        purchaseOrder: {
          resource_Id: 8,
          isActive: false,
          resources: "PurchaseOrder",
          parentId: 1,
        },
        purchaseInvoiceCreation: {
          resource_Id: 9,
          isActive: true,
          resources: "PurchaceInvoiceCreation",
          parentId: 1,
        },
        purchaseInvoiceClearance: {
          resource_Id: 10,
          isActive: false,
          resources: "PurchaceInvoiceClearing",
          parentId: 1,
        },
      },
      customer: {
        resource_Id: 11,
        isActive: false,
        resources: "Customer",
        parentId: 0,
        customerList: {
          resource_Id: 12,
          isActive: true,
          resources: "CustomerList",
          parentId: 11,
          addCustomer: {
            resource_Id: 13,
            isActive: true,
            resources: "AddCustomer",
            parentId: 12,
          },
        },
        salesRequest: {
          resource_Id: 14,
          isActive: false,
          resources: "SalesRequestList",
          parentId: 11,
          createSR: {
            resource_Id: 15,
            isActive: false,
            resources: "CreateSalesRequest",
            parentId: 14,
          },
          srApprover: {
            resource_Id: 16,
            isActive: false,
            resources: "SalesRequestApprove",
            parentId: 14,
          },
        },
        salesOrder: {
          resource_Id: 17,
          isActive: false,
          resources: "SalesOrder",
          parentId: 11,
        },
        salesInvoiceCreation: {
          resource_Id: 18,
          isActive: false,
          resources: "SalesInvoiceCreation",
          parentId: 11,
        },
        salesInvoiceClearing: {
          resource_Id: 19,
          isActive: false,
          resources: "SalesInvoiceClearing",
          parentId: 11,
        },
      },
      inventory: {
        resource_Id: 20,
        isActive: true,
        resources: "Inventory",
        parentId: 0,
        productList: {
          resource_Id: 21,
          isActive: true,
          resources: "ProductList",
          parentId: 20,
        },
      },
    },
    {
      role_Id: 4,
      roles: "Approver",
      vendor: {
        resource_Id: 1,
        resources: "Vendor",
        isActive: false,
        parentId: 0,
        vendorList: {
          resource_Id: 2,
          isActive: true,
          resources: "VendorList",
          parentId: 1,
          addMaterial: {
            resource_Id: 4,
            isActive: true,
            resources: "AddMaterial",
            parentId: 2,
          },
          addVendor: {
            resource_Id: 3,
            isActive: true,
            resources: "AddVendor",
            parentId: 2,
          },
        },
        purchaseRequest: {
          resource_Id: 5,
          isActive: true,
          resources: "PurchaseRequest",
          parentId: 1,
          createPR: {
            resource_Id: 6,
            isActive: true,
            resources: "CreatePurchaseRequest",
            parentId: 1,
          },
          prApprover: {
            resource_Id: 7,
            isActive: false,
            resources: "ParchaseRequestApprove",
            parentId: 1,
          },
        },
        purchaseOrder: {
          resource_Id: 8,
          isActive: false,
          resources: "PurchaseOrder",
          parentId: 1,
        },
        purchaseInvoiceCreation: {
          resource_Id: 9,
          isActive: true,
          resources: "PurchaceInvoiceCreation",
          parentId: 1,
        },
        purchaseInvoiceClearance: {
          resource_Id: 10,
          isActive: false,
          resources: "PurchaceInvoiceClearing",
          parentId: 1,
        },
      },
      customer: {
        resource_Id: 11,
        isActive: false,
        resources: "Customer",
        parentId: 0,
        customerList: {
          resource_Id: 12,
          isActive: true,
          resources: "CustomerList",
          parentId: 11,
          addCustomer: {
            resource_Id: 13,
            isActive: true,
            resources: "AddCustomer",
            parentId: 12,
          },
        },
        salesRequest: {
          resource_Id: 14,
          isActive: false,
          resources: "SalesRequestList",
          parentId: 11,
          createSR: {
            resource_Id: 15,
            isActive: false,
            resources: "CreateSalesRequest",
            parentId: 14,
          },
          srApprover: {
            resource_Id: 16,
            isActive: false,
            resources: "SalesRequestApprove",
            parentId: 14,
          },
        },
        salesOrder: {
          resource_Id: 17,
          isActive: false,
          resources: "SalesOrder",
          parentId: 11,
        },
        salesInvoiceCreation: {
          resource_Id: 18,
          isActive: false,
          resources: "SalesInvoiceCreation",
          parentId: 11,
        },
        salesInvoiceClearing: {
          resource_Id: 19,
          isActive: false,
          resources: "SalesInvoiceClearing",
          parentId: 11,
        },
      },
      inventory: {
        resource_Id: 20,
        isActive: true,
        resources: "Inventory",
        parentId: 0,
        productList: {
          resource_Id: 21,
          isActive: true,
          resources: "ProductList",
          parentId: 20,
        },
      },
    },
  ];

  const [MasterData, setMasterData] = React.useState(backendData);
  const [tempData, setTempData] = React.useState(backendData);

  console.log(backendData,"backendData")

  const mappingValue = () =>{
    backendData.forEach((el)=>{
      if(typeof el == "object"){
        fn(el)
      }
    })
  } 

  const fn = (el) =>{
    Object.values(el).map(el=>{
          if(typeof el == "object"){
            fn(el)
      }
      else{
        console.log(el,"el")
      }
    })
  }


  const HeirarchyMapping = (data) =>{

    data.map((row)=>{

      for(let arr in row){
        if(typeof row[arr] == "object"){
          mapAgain(row[arr])
        }
        else{
          console.log(arr  +" - " +row[arr])
        }
      }
    })
  }

  const mapAgain = (row) =>{
    Object.values(row).map((value)=>{
      if(typeof value == "object"){
        for(var iteration in value){
          if(typeof value[iteration] == "object"){
              mapAgain(value[iteration])
            }
            else{
              console.log(iteration  +" - " +value[iteration] ,1234567890)
            }
        }
      }
      else{}

    })
  }


  useEffect(()=>{
    // mappingValue()
    HeirarchyMapping(backendData)
  },[])

  const handleChange = (e, index, roleId, resourceId, resources, obj) => {};

  const parentStyle = {
    backgroundColor: "#7E6EF2",
    color: "white",
    margin: 0,
    padding: 0,
  };

  const ClickHandler = (data) => {
    let values = MasterData.map((el) => {
        if (data.roles == el.roles) {
          el.vendor.isActive = el.vendor.isActive ? false : true;
          el.vendor.vendorList.isActive = el.vendor.isActive  ;
          el.vendor.vendorList.addMaterial.isActive = el.vendor.isActive;
          el.vendor.vendorList.addVendor.isActive = el.vendor.isActive;
          el.vendor.purchaseRequest.isActive = el.vendor.isActive;
          el.vendor.purchaseRequest.createPR.isActive = el.vendor.isActive;
          el.vendor.purchaseRequest.prApprover.isActive = el.vendor.isActive;
          el.vendor.purchaseOrder.isActive = el.vendor.isActive ;
          el.vendor.purchaseInvoiceCreation.isActive = el.vendor.isActive;
          el.vendor.purchaseInvoiceClearance.isActive = el.vendor.isActive;
        }
        return el;
      });

    if (values !== undefined && values !== null) {
      setMasterData(values);
    }
  };

  const vendorList= (data) =>{
    const getDataValue = MasterData.map((row)=>{
          if(row.vendor.vendorList == data){
            row.vendor.vendorList.isActive =  !row.vendor.vendorList.isActive
            row.vendor.vendorList.addMaterial.isActive =row.vendor.vendorList.isActive? true: false;
            row.vendor.vendorList.addVendor.isActive = row.vendor.vendorList.isActive? true: false; 
          }
          return row
      })
    if (getDataValue !== undefined && getDataValue !== null) {
        setMasterData(getDataValue);
    }
  } 

  const purchaseOrder = (data) =>{
    const getDataValue = MasterData.map((row)=>{
      if(row.vendor.purchaseRequest == data){
        row.vendor.purchaseRequest.isActive =  !row.vendor.purchaseRequest.isActive
        row.vendor.purchaseRequest.createPR.isActive = row.vendor.purchaseRequest.isActive ? true: false;
        row.vendor.purchaseRequest.prApprover.isActive = row.vendor.purchaseRequest.isActive ? true: false;
      }
      return row
    })
      if (getDataValue !== undefined && getDataValue !== null) {
          setMasterData(getDataValue);
      }
  }

  const singleSelect = (data) =>{
    const x=MasterData.map((row)=>{
      if(row.vendor.purchaseRequest.prApprover == data.vendor.purchaseRequest.prApprover){
        row.vendor.purchaseRequest.prApprover.isActive = !row.vendor.purchaseRequest.prApprover.isActive
        console.log(row.vendor.purchaseRequest.prApprover.isActive)
      }
      return row
    })
    setMasterData(x);
  }


  return (
    <div className="user-access">
      {/* ))} */}
    </div>
  );      
};

export default UserAccess;

// {MasterData.map((el, index) => (
//   <div key={index}>
//     <Accordion style={parentStyle} id={el.role_Id} key={el.role_Id}>
//       <AccordionSummary>{el.roles}</AccordionSummary>

//       <AccordionDetails className="p-0">
//         {/* 2nd accordian start */}
//         <Accordion>
//           <AccordionSummary>
//             <div className="checkbox">
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={`${el.role_Id}${el.vendor.resource_Id}`}
//                   name={el.vendor.resource_Id}
//                   onClick={() => ClickHandler(el)}
//                   checked={el.vendor.isActive}
//                   value={el.vendor.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.vendor.resource_Id}>Vendors</label>
//                 <br />
//               </div>
//             </div>
//           </AccordionSummary>

//           <AccordionDetails className="p-0">
//             {/* vendor List */}
//             <Accordion>
//               <AccordionSummary>
//                 <div className="checkbox" style={{ marginLeft: "2rem" }}>
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       onChange={(e) => handleChange(e, index)}
//                       id={`${el.role_Id}${el.vendor.vendorList.resource_Id}`}
//                       name={el.vendor.vendorList.resource_Id}
//                       value={el.vendor.vendorList.resource_Id}
//                       checked={el.vendor.vendorList.isActive}
//                       onClick={()=>vendorList(el.vendor.vendorList)}
//                     />
//                   </div>
//                   <div>
//                     <label for={el.vendor.vendorList.resource_Id}>
//                       Vendor List
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionSummary>

//               <AccordionDetails className="p-0">
//                 {/* Add Vendor */}
//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       onChange={(e) =>
//                         handleChange(
//                           e,
//                           el.roles,
//                           el.vendor.vendorList.addVendor.resource_Id,
//                           el.vendor.vendorList.addVendor.isActive
//                         )
//                       }
//                       id={el.vendor.vendorList.addVendor.resource_Id}
//                       name={el.vendor.vendorList.addVendor.resource_Id}
//                       value={el.vendor.vendorList.addVendor.isActive}
//                       checked={el.vendor.vendorList.addVendor.isActive}
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={el.vendor.vendorList.addVendor.resource_Id}
//                     >
//                       Add Vendor
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//                 {/* Purchase Request */}
//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.vendor.vendorList.addMaterial.resource_Id}
//                       name={el.vendor.vendorList.addMaterial.resource_Id}
//                       value={el.vendor.vendorList.addMaterial.isActive}
//                       checked={el.vendor.vendorList.addMaterial.isActive}
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={el.vendor.vendorList.addMaterial.resource_Id}
//                     >
//                       Add Material
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionDetails>
//             </Accordion>

//             {/* purchase Request */}
//             <Accordion>
//               <AccordionSummary>
//                 <div className="checkbox" style={{ marginLeft: "2rem" }}>
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.vendor.purchaseRequest.resource_Id}
//                       name={el.vendor.purchaseRequest.resource_Id}
//                       value={el.vendor.purchaseRequest.isActive}
//                       checked={el.vendor.purchaseRequest.isActive}
//                       onClick={()=>purchaseOrder(el.vendor.purchaseRequest)}
//                     />
//                   </div>
//                   <div>
//                     <label for={el.vendor.purchaseRequest.resource_Id}>
//                       Purchase Request
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionSummary>

//               <AccordionDetails className="p-0">
//                 {/* Create PR */}
//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.vendor.purchaseRequest.createPR.resource_Id}
//                       name={
//                         el.vendor.purchaseRequest.createPR.resource_Id
//                       }
//                       value={el.vendor.purchaseRequest.createPR.isActive}
//                       checked={
//                         el.vendor.purchaseRequest.createPR.isActive
//                       }
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={el.vendor.purchaseRequest.createPR.resource_Id}
//                     >
//                       Create PR
//                     </label>
//                     <br />
//                   </div>
//                 </div>

//                 {/* prApprover */}
//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={
//                         el.vendor.purchaseRequest.prApprover.resource_Id
//                       }
//                       name={
//                         el.vendor.purchaseRequest.prApprover.resource_Id
//                       }
//                       value={
//                         el.vendor.purchaseRequest.prApprover.isActive
//                       }
//                       checked={
//                         el.vendor.purchaseRequest.prApprover.isActive
//                       }
//                       onClick={()=>singleSelect(el)}
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={
//                         el.vendor.purchaseRequest.prApprover.resource_Id
//                       }
//                     >
//                       PR Approver
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionDetails>
//             </Accordion>

//             <div className="checkbox" style={{ margin: "1rem 0 0 3rem" }}>
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.vendor.purchaseOrder.resource_Id}
//                   name={el.vendor.purchaseOrder.resource_Id}
//                   value={el.vendor.purchaseOrder.isActive}
//                   checked={el.vendor.purchaseOrder.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.vendor.purchaseOrder.resource_Id}>
//                   Purchase Order
//                 </label>
//                 <br />
//               </div>
//             </div>

//             <div className="checkbox" style={{ margin: "1rem 0 0 3rem" }}>
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.vendor.purchaseInvoiceCreation.resource_Id}
//                   name={el.vendor.purchaseInvoiceCreation.resource_Id}
//                   value={el.vendor.purchaseInvoiceCreation.isActive}
//                   checked={el.vendor.purchaseInvoiceCreation.isActive}
//                 />
//               </div>
//               <div>
//                 <label
//                   for={el.vendor.purchaseInvoiceCreation.resource_Id}
//                 >
//                   Purchase Invoice Creation
//                 </label>
//                 <br />
//               </div>
//             </div>

//             <div
//               className="checkbox"
//               style={{ margin: "1rem 0 1rem 3rem" }}
//             >
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.vendor.purchaseInvoiceClearance.resource_Id}
//                   name={el.vendor.purchaseInvoiceClearance.resource_Id}
//                   value={el.vendor.purchaseInvoiceClearance.isActive}
//                   checked={el.vendor.purchaseInvoiceClearance.isActive}
//                 />
//               </div>
//               <div>
//                 <label
//                   for={el.vendor.purchaseInvoiceClearance.resource_Id}
//                 >
//                   Purchase Invoice Clearing
//                 </label>
//                 <br />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//         {/*  2nd end */}

//         {/* 3rd accordian start */}
//         <Accordion>
//           <AccordionSummary>
//             <div className="checkbox">
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.customer.resource_Id}
//                   name={el.customer.resource_Id}
//                   value={el.customer.isActive}
//                   checked={el.customer.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.customer.resource_Id}>Customer</label>
//                 <br />
//               </div>
//             </div>
//           </AccordionSummary>

//           <AccordionDetails className="p-0">
//             {/* Customer List */}
//             <Accordion>
//               <AccordionSummary>
//                 <div className="checkbox" style={{ marginLeft: "2rem" }}>
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.customer.customerList.resource_Id}
//                       name={el.customer.customerList.resource_Id}
//                       value={el.customer.customerList.isActive}
//                       checked={el.customer.customerList.isActive}
//                     />
//                   </div>
//                   <div>
//                     <label for={el.customer.customerList.resource_Id}>
//                       Customer List
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionSummary>

//               <AccordionDetails className="p-0">
//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={
//                         el.customer.customerList.addCustomer.resource_Id
//                       }
//                       name={
//                         el.customer.customerList.addCustomer.resource_Id
//                       }
//                       value={
//                         el.customer.customerList.addCustomer.isActive
//                       }
//                       checked={
//                         el.customer.customerList.addCustomer.isActive
//                       }
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={
//                         el.customer.customerList.addCustomer.resource_Id
//                       }
//                     >
//                       Add Customer
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionDetails>
//             </Accordion>

//             {/* Sales Request */}
//             <Accordion>
//               <AccordionSummary>
//                 <div className="checkbox" style={{ marginLeft: "2rem" }}>
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.customer.salesRequest.resource_Id}
//                       name={el.customer.salesRequest.resource_Id}
//                       value={el.customer.salesRequest.isActive}
//                       checked={el.customer.salesRequest.isActive}
//                     />
//                   </div>
//                   <div>
//                     <label for={el.customer.salesRequest.resource_Id}>
//                       Sales Request
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionSummary>

//               <AccordionDetails className="p-0">
//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.customer.salesRequest.createSR.resource_Id}
//                       name={el.customer.salesRequest.createSR.resource_Id}
//                       value={el.customer.salesRequest.createSR.isActive}
//                       checked={el.customer.salesRequest.createSR.isActive}
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={el.customer.salesRequest.createSR.resource_Id}
//                     >
//                       Create SR
//                     </label>
//                     <br />
//                   </div>
//                 </div>

//                 <div
//                   className="checkbox"
//                   style={{ margin: "0 0 1rem 4rem" }}
//                 >
//                   <div className="inputbox">
//                     <input
//                       type="checkbox"
//                       id={el.customer.salesRequest.srApprover.resource_Id}
//                       name={
//                         el.customer.salesRequest.srApprover.resource_Id
//                       }
//                       value={el.customer.salesRequest.srApprover.isActive}
//                       checked={
//                         el.customer.salesRequest.srApprover.isActive
//                       }
//                     />
//                   </div>
//                   <div>
//                     <label
//                       for={
//                         el.customer.salesRequest.srApprover.resource_Id
//                       }
//                     >
//                       SR Approver
//                     </label>
//                     <br />
//                   </div>
//                 </div>
//               </AccordionDetails>
//             </Accordion>

//             <div className="checkbox" style={{ margin: "1rem 0 0 3rem" }}>
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.customer.salesOrder.resource_Id}
//                   name={el.customer.salesOrder.resource_Id}
//                   value={el.customer.salesOrder.isActive}
//                   checked={el.customer.salesOrder.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.customer.salesOrder.resource_Id}>
//                   Sales Order
//                 </label>
//                 <br />
//               </div>
//             </div>

//             <div className="checkbox" style={{ margin: "1rem 0 0 3rem" }}>
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.customer.salesInvoiceCreation.resource_Id}
//                   name={el.customer.salesInvoiceCreation.resource_Id}
//                   value={el.customer.salesInvoiceCreation.isActive}
//                   checked={el.customer.salesInvoiceCreation.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.customer.salesInvoiceCreation.resource_Id}>
//                   Sales Invoice Creation
//                 </label>
//                 <br />
//               </div>
//             </div>
//             <div
//               className="checkbox"
//               style={{ margin: "1rem 0 1rem 3rem" }}
//             >
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.customer.salesInvoiceClearing.resource_Id}
//                   name={el.customer.salesInvoiceClearing.resource_Id}
//                   value={el.customer.salesInvoiceClearing.isActive}
//                   checked={el.customer.salesInvoiceClearing.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.customer.salesInvoiceClearing.resource_Id}>
//                   Sales Invoice Clearing
//                 </label>
//                 <br />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//         {/*  3rd end */}

//         {/* 4rd accordian start */}
//         <Accordion>
//           <AccordionSummary>
//             <div className="checkbox">
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.inventory.resource_Id}
//                   name={el.inventory.resource_Id}
//                   value={el.inventory.isActive}
//                   checked={el.inventory.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.inventory.resource_Id}>Inventory</label>
//                 <br />
//               </div>
//             </div>
//           </AccordionSummary>

//           <AccordionDetails className="p-0">
//             <div
//               className="checkbox"
//               style={{ margin: "1rem 0 1rem 3rem" }}
//             >
//               <div className="inputbox">
//                 <input
//                   type="checkbox"
//                   id={el.inventory.productList.resource_Id}
//                   name={el.inventory.productList.resource_Id}
//                   value={el.inventory.productList.isActive}
//                   checked={el.inventory.productList.isActive}
//                 />
//               </div>
//               <div>
//                 <label for={el.inventory.productList.resource_Id}>
//                   Product List
//                 </label>
//                 <br />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//         {/*  4rd end */}
//       </AccordionDetails>
//     </Accordion>
//   </div>
// ))}