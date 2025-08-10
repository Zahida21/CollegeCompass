import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';
import { FaVideo } from 'react-icons/fa';

const BlockRodie = {
  name: 'Blockchain Development Roadmap',
  toggled: true,
  children: [
    {
      name: '1. Basics of Blockchain',
      children: [
        {
          name: 'Introduction to Blockchain',
          videoUrl: 'https://www.youtube.com/watch?v=SSo_EIwHSd4'
        },
        {
          name: 'Decentralization Concepts',
          videoUrl: 'https://www.youtube.com/watch?v=2vV4w6eP4zA'
        },
      ],
    },
    {
      name: '2. Smart Contracts and Ethereum',
      children: [
        {
          name: 'Introduction to Ethereum and Smart Contracts',
          videoUrl: 'https://www.youtube.com/watch?v=XLahKIs4N-Y'
        },
        {
          name: 'Writing Smart Contracts with Solidity',
          videoUrl: 'https://www.youtube.com/watch?v=ipwxYa-F1uY'
        },
      ],
    },
    {
      name: '3. Advanced Blockchain Development',
      children: [
        {
          name: 'Ethereum DApp Development',
          videoUrl: 'https://www.youtube.com/watch?v=Af_lQ1zUnoM'
        },
        {
          name: 'Understanding Gas, Transactions & Storage',
          videoUrl: 'https://www.youtube.com/watch?v=FE6kMLQluOA'
        },
      ],
    },
    {
      name: '4. Pro-Level: Scaling & Security',
      children: [
        {
          name: 'Blockchain Security Best Practices',
          videoUrl: 'https://www.youtube.com/watch?v=H_OLbJ91hoI'
        },
        {
          name: 'Scaling Solutions (Layer 2)',
          videoUrl: 'https://www.youtube.com/watch?v=vufWkMGPTSA'
        },
      ],
    },
  ],
};

function BlockchainRoadmap() {
  const [data, setData] = useState(BlockRodie);
  const [cursor, setCursor] = useState(false);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));
  };

  return (
    <div className="blockchain-roadmap-container">
      <h2 className="blockchain-roadmap-title">Blockchain Development Roadmap</h2>
      <Treebeard data={data} onToggle={onToggle} />
      {cursor && cursor.videoUrl && (
        <div className="blockchain-roadmap-video">
          <h3>{cursor.name}</h3>
          <a href={cursor.videoUrl} target="_blank" rel="noopener noreferrer">
            <FaVideo className="blockchain-roadmap-icon" /> Watch Tutorial
          </a>
        </div>
      )}
    </div>
  );
}

const styles = {
  '.blockchain-roadmap-container': {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  '.blockchain-roadmap-title': {
    textAlign: 'center',
    color: 'black', // Updated to black
    fontSize: '24px',
    marginBottom: '20px',
  },
  '.blockchain-roadmap-video': {
    marginTop: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    color: 'black', // Updated to black
  },
  '.blockchain-roadmap-icon': {
    color: '#c4302b',
    marginRight: '8px',
  },
};

// Apply the styles
Object.keys(styles).forEach((selector) => {
  const styleString = Object.entries(styles[selector])
    .map(([key, value]) => `${key}: ${value};`)
    .join(' ');
  const styleTag = document.createElement('style');
  styleTag.textContent = `${selector} { ${styleString} }`;
  document.head.appendChild(styleTag);
});

export default BlockchainRoadmap;
