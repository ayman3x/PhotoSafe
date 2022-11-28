import React, { useState, useEffect, useContext, createContext } from "react";

import { create } from 'ipfs-core'

// CTX 
const IPFSContext = createContext({
  IPFS: null,
});

export function IPFSProvider({ children }) {
    
    const [ipfs, setIpfs] = useState(null);

  useEffect(() => {

    const init = async () => {
      if (ipfs) return

      const node = await create({repo: '.btfs', url: "/ip4/127.0.0 .1/tcp/5101"});

      const nodeId = await node.id();
      const nodeVersion = await node.version();
      const nodeIsOnline = node.isOnline();
      console.log(nodeId)
      
      setIpfs(node);
    //   setId(nodeId.id);
    //   setVersion(nodeVersion.version);
    //   setIsOnline(nodeIsOnline);
    }

    init()
  }, [ipfs]);

  return (
    <IPFSContext.Provider value={{ ipfs }}>{children}</IPFSContext.Provider>
  );
}

export const useIPFS = () => {
  return useContext(IPFSContext);
};
