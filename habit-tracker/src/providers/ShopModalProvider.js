import React, { createContext, useState } from 'react';

const ShopModalContext = createContext();

const ShopModalProvider = ({ children }) => {
  const [shopModalType, setShopModalType] = useState('add');
  const [selectedReward, setSelectedReward] = useState(null);
  const [shopModalVisible, setShopModalVisible] = useState(false);
  const [newRewardName, setNewRewardName] = useState('');
  const [newRewardPointValue, setNewRewardPointValue] = useState('');
  const [newRewardColor, setNewRewardColor] = useState('');
  const changeRewardColor = (color) => {
    if (newRewardColor === color) {
      setNewRewardColor('');
      return;
    }
    setNewRewardColor(color);
  }
  return (
    <ShopModalContext.Provider value={{
      shopModalType, setShopModalType, shopModalVisible, setShopModalVisible, newRewardName, setNewRewardName, newRewardPointValue, setNewRewardPointValue, newRewardColor, setNewRewardColor, changeRewardColor, selectedReward, setSelectedReward
      }}>
      {children}
    </ShopModalContext.Provider>
  );
};


export { ShopModalProvider, ShopModalContext };
