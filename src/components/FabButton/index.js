import React from "react";
import { IonFab, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { FabButtonFromIonic } from "./index.style";

const FabButton = () => {
  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <FabButtonFromIonic size="small">
        <IonIcon icon={add} />
      </FabButtonFromIonic>
    </IonFab>
  );
};

export default FabButton;
