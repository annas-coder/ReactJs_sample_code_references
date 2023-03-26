import React from "react";

import OrgTreeComponent, { useTree } from 'react-drag-hierarchy-tree';
import Hierarchy1 from "../Json/Heirarchy1.json";

const data = {
    id: 1,
    label: "President",
    children: [
      {
        id: 2,
        label: "Administrative",
        children: [  
          {
            id: 3,
            label: "Director",
            children: [],
          },
        ],
      },
      {
        id: 4,
        label: "Finances",
        children: [
          {
            id: 5,
            label: "Seller",
            children: [],
          },
        ],
      },
    ],
  };

function Hierarchy(){
    const { treeRef } = useTree();

    // const onClick = () => {
    //   treeRef.current?.onExpandNodes();
    // };

    return(
        <div>
            
            <OrgTreeComponent data={Hierarchy1} virtual />
        </div>
    )
}
export default Hierarchy;