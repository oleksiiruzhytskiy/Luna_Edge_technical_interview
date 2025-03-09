import { useState } from "react";
import { Form } from "../components/Form";
import { Select } from "../components/Select";
import { Modal } from "../components/Modal";
import { Controller, useForm } from 'react-hook-form';
export const Home = () => {
  const { control } = useForm();
  const [team, setTeam] = useState<{ name: string; sprite: string }[]>([]);
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8">
      {!user ? (
        <Form onSubmit={setUser} />
      ) : (
        <>
          <Controller
            name="pokemonTeam"
            control={control}
            rules={{
              validate: (value) =>
                value.length === 4 || "You must select exactly 4 Pokémon",
            }}
            render={() => <Select onSelect={setTeam} />}
          />

          {team.length === 4 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white p-2 mt-4 rounded"
            >
              See Team
            </button>
          )}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            team={team}
          />
        </>
      )}
    </div>
  );
};
