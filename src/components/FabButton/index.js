import React from "react";
import { IonFab, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { FabButtonFromIonic } from "./index.style";

const FabButton = ({ toggleModal }) => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <FabButtonFromIonic size="small" onClick={() => toggleModal()}>
        <IonIcon icon={add} />
      </FabButtonFromIonic>
    </IonFab>
  );
};

export default FabButton;
