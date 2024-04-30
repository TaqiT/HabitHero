import React, { createContext, useState } from 'react';

const ShopModalContext = createContext();

const ShopModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState('add');
  const [selectedReward, setSelectedReward] = useState(null);
  const [RewardModalVisible, setRewardModalVisible] = useState(false);
  const [newRewardName, setNewRewardName] = useState('');
  const [newRewardPointValue, setNewRewardPointValue] = useState('0');
  const [newRewardColor, setNewRewardColor] = useState('');
  const changeColor = (color) => {
    if (newRewardColor === color) {
      setNewRewardColor('');
      return;
    }
    setNewRewardColor(color);
  }
  return (
    <ShopModalContext.Provider value={{
      modalType, setModalType, RewardModalVisible, setRewardModalVisible, newRewardName, setNewRewardName, newRewardPointValue, setNewRewardPointValue, newRewardColor, setNewRewardColor, changeColor, selectedReward, setSelectedReward
      }}>
      {children}
    </ShopModalContext.Provider>
  );
};


export { ShopModalProvider, ShopModalContext };
