import React from 'react';
import { CommandButton } from './CommandButton';
import type { CommandType } from '../../lib/chatCommands';

interface CommandListProps {
  commands: CommandType[];
  onCommandClick: (command: string) => void;
}

export function CommandList({ commands, onCommandClick }: CommandListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 bg-black/20 rounded-xl">
      {commands.map((cmd) => (
        <CommandButton
          key={cmd.command}
          command={cmd.command}
          description={cmd.description}
          onClick={() => onCommandClick(cmd.command)}
        />
      ))}
    </div>
  );
}