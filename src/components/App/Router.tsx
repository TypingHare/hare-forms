import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BASENAME, Url } from '../../constants/web.ts'
import { Home } from '../Home'
import { Resume } from '../Resume'
import { Works } from '../Works'
import { Contact } from '../Contact/Contact.tsx'

export function Router() {
    return (
        <BrowserRouter basename={BASENAME}>
            <Routes>
                <Route path={Url.HOME} element={<Home />} />
                <Route path={Url.RESUME} element={<Resume />} />
                <Route path={Url.WORKS} element={<Works />} />
                <Route path={Url.CONTACT} element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
