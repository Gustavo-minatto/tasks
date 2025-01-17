import styled from "styled-components";
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoint';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid; 
  grid-template-columns: 280px auto; 
  grid-template-rows: auto 1fr; 
  grid-template-areas: 
    "menu top"
    "menu content";

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  
    grid-template-areas: 
    "top"
    "menu content";

  }
`;

export const FixedContent = styled.section`
  grid-area: top;
`;
