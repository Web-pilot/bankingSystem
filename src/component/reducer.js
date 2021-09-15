const reducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "DEPOSIT":
      return {
        ...state,
        account: state.account + parseInt(payLoad.depositAmount),
        transaction: [
          {
            id: Date.now().toString(),
            amount: payLoad.depositAmount,
            name: payLoad.depositorsName,
            date: payLoad.date,
            transactionType: payLoad.transactionType,
          },
          ...state.transaction,
        ],
        successAlert: (state.successAlert = true),
        message: "Your account has been credited",
        alert: (state.alert = false),
        isModalOpen: (state.isModalOpen = true),
        comfirm: (state.comfirm = true),
        transactionAmount: (state.transactionAmount = payLoad.depositAmount),
      };

    case "WITHDRAW":
      if (state.account < payLoad.withdrawalAmount) {
      }
      return {
        ...state,
        account: state.account - parseInt(payLoad.withdrawalAmount),
        transaction: [
          {
            id: Date.now().toString(),
            amount: payLoad.withdrawalAmount,
            name: payLoad.withDrawalsName,
            date: payLoad.withdrawDate,
            transactionType: payLoad.transactionType,
          },
          ...state.transaction,
        ],
        alert: (state.alert = false),
        isModalOpen: (state.isModalOpen = true),
        comfirm: (state.comfirm = true),
        successAlert: (state.successAlert = true),
        message: "Your account has been Debited",
        transactionAmount: (state.transactionAmount = payLoad.withdrawalAmount),
      };

    case "OPEN_MODAL":
      return { ...state, alert: (state.alert = true) };

    case "EMPTY_INPUT_FORM":
      return {
        ...state,
        alert: (state.alert = false),
        isModalOpen: (state.isModalOpen = true),
        modalContent: (state.modalContent = "Please fill in the form"),
      };

    case "TYPING":
      return { ...state, isModalOpen: (state.isModalOpen = false) };

    case "CANCEL_TRANSACTION":
      return { ...state, alert: (state.alert = false) };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transaction: [
          ...state.transaction.filter((item) => {
            return item.id !== payLoad;
          }),
        ],
      };

    case "CLOSE_SUCCESS_ALERT":
      return {
        ...state,
        successAlert: (state.successAlert = false),
      };

    default:
      return state;
  }
};

export default reducer;
