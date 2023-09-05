// Home.js
import React from "react";
import { Flex, Button, Text, Box } from "@chakra-ui/react";
import AppLayout from "../AppLayout/AppLayout";
import { useState } from "react";
import XLSX from "xlsx";

function Home() {
  const [columns, setColumns] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const wb = XLSX.read(content, { type: "binary" });
      const sheetName = wb.SheetNames[0];
      const ws = wb.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const headerRow = data[0];
      const parsedData = data.slice(1);

      setColumns(headerRow);
      set
      setShowTable(true);
    };
    reader.readAsText(file);
  }
  return (
      <AppLayout>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bg="custom.color1"
        >
          <Button bgColor="custom.color3" mt={4}>
            Cargar audiencias
          </Button>
        </Flex>
      </AppLayout>
  );
}

export default Home;
