const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    return (
      isOpen && (
        <div className="fixed font-Nunito  top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white max-w-sm sm:max-w-lg p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to submit the test?</p>
            <div className="flex justify-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-4" onClick={onConfirm}>
                Yes
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

  export default ConfirmationModal;