// import Form from "./Component/Form"
import {Table} from "./Component/Table/Table"
import React, {Component} from "react";

class App extends Component {

  state = {
    patients: [
      { operID: `op1`,
        operName: `Oper1`,
         patient1: { 
            id: `abc1`,
            name: "Vasya Vasilievich Noga",
            dofB: `10.10.1894` ,
            rd: `10.1912`,
            blood: "IV",
            diagnosis: "AbraCadabra",
            op: "Plus AbraHuyabra",
            brig: "Tima, Tema, Collapse",
            fin: "OMS",
            time: `00:00:00`,
        },
        patient2: { id: `abc2`,
          name: "Vas Vasilievich Noga",
          dofB: `10.10.1894` ,
          RD: `10.1912`,
          blood: "IV",
          diagnosis: "AbraCadabra",
          OP: "Plus AbraHuyabra",
          brig: "Tima, Tema, Collapse",
          fin: "OMS",
          time: `00:00:00`,
        },
        patient2: { id: `abc3`,
          name: "Vasyan Vasilievich Noga",
          DofB: `10.10.1894` ,
          RD: `10.1912`,
          Blood: "IV",
          Diagnosis: "AbraCadabra",
          OP: "Plus AbraHuyabra",
          Brig: "Tima, Tema, Collapse",
          Fin: "OMS",
          Time: `00:00:00`,
        },
      },
    ],
  }
  render() {
    return (
      <Table table = {this.state.patients}/>
    )
  }
}

export default App;
