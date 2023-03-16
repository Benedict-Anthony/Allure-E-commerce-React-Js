import { createContext, useContext, useEffect, useState } from "react"
import { ServicesContextInterface, childrenProps } from "../types/contextTypes"
import { service } from "../types/reducerTypes"
import getData from "../utils/fetchFunc"


const ServicesContext = createContext({} as ServicesContextInterface)
export const useServicesContext = () => useContext(ServicesContext)

export const ServicesProvider = ({ children }: childrenProps) => {
    const [services, setServices] = useState<service[]>([])
    const [serviceDetail, setServicesDatail] = useState<service[]>([])
    const [service, setService] = useState<service>({})


    async function fecthServiceDetail(slug: string | null | undefined) {
        const data = await getData(`services/${slug}`)
        setServicesDatail(data)
    }

    async function bookService(slug: string, book: string) {
        const data = await getData(`services/${slug}/${book}`)
        setService(data)
    }
    useEffect(() => {
        async function fetchServices() {
            const data = await getData("services")
            setServices(data)
        }
        fetchServices()
    }, [])


    return (
        <ServicesContext.Provider value={{
            service,
            services,
            serviceDetail,
            fecthServiceDetail,
            bookService
        }}>
            {children}
        </ServicesContext.Provider>
    )
}

export default ServicesContext