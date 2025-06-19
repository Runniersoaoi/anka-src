
function App() {
  return (
    <StatusProvider>
      <BrowserRouter>
        <ImageDescriptionButton />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </StatusProvider>
  );
}

export default App;
