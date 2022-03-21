import { render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import PageTitle from './PageTitle';


function renderWithHelmet(ui) {
    return {
        ...render(<HelmetProvider>{ui}</HelmetProvider>)
    }
};



test('Sets default page title', async () => {
    renderWithHelmet(<PageTitle />);
    await waitFor( () => expect(document.title).toEqual('Rock &amp; Roll with React'))
});

test('Prepends passed title', async () => {
    renderWithHelmet(<PageTitle title='fubar' />);
    await waitFor( () => expect(document.title).toEqual('fubar | Rock &amp; Roll with React'))
});