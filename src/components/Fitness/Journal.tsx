// src/components/Fitness/Journal.tsx
import React, { useState } from 'react';
import { IonTextarea, IonButton } from '@ionic/react';

const Journal: React.FC = () => {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  const saveNote = () => {
    if (note.trim() !== '') {
      setSavedNotes([note, ...savedNotes]);
      setNote('');
    }
  };

  return (
    <div>
      <IonTextarea
        value={note}
        placeholder="Write about your day..."
        onIonChange={(e) => setNote(e.detail.value!)}
      />
      <IonButton expand="block" color="primary" onClick={saveNote} className="save-button">
        Save Note
      </IonButton>

      {/* Show previous notes */}
      {savedNotes.length > 0 && (
        <div className="saved-notes">
          {savedNotes.map((n, idx) => (
            <IonTextarea key={idx} readonly value={n} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Journal;
