function StartJourneyModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      data-name="start-journey-modal"
      data-file="components/StartJourneyModal.js"
    >
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <div className="icon-x text-xl"></div>
        </button>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default StartJourneyModal;
