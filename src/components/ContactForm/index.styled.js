import styled from "styled-components";
import { IonButton, IonIcon } from "@ionic/react";

export const IonButtonFromIonic = styled(IonButton)`
  --background: #37a25f;
`;

export const Title = styled.p`
  text-align: center;
`;

export const CloseIcon = styled(IonIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
