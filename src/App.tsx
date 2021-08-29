import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "./styles/main.scss";
import Container from "./components/Container";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Container />
		</QueryClientProvider>
	);
}

export default App;
