interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    team: { name: string; sprite: string }[];
  }
  
  export const Modal = ({ isOpen, onClose, team }: ModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded">
          <h2 className="text-lg font-bold">Your Team</h2>
          <div className="flex gap-4">
            {team.map(p => (
              <div key={p.name} className="text-center">
                <img src={p.sprite} alt={p.name} className="w-16 h-16" />
                <p>{p.name}</p>
              </div>
            ))}
          </div>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</button>
        </div>
      </div>
    );
  };
  