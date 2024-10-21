import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BASENAME, Url } from '../../constants/web.ts'
import { Home } from '../Home'
import { Resume } from '../Resume'
import { Portfolio } from '../Portfolio'
import { Contact } from '../Contact/Contact.tsx'
import { Records } from '../Records'

export function Router() {
    return (
        <BrowserRouter basename={BASENAME}>
            <Routes>
                <Route path={Url.HOME} element={<Home />} />
                <Route path={Url.RESUME} element={<Resume />} />
                <Route path={Url.PORTFOLIO} element={<Portfolio />} />
                <Route path={Url.RECORDS} element={<Records />} />
                <Route path={Url.CONTACT} element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
