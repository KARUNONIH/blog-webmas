import { useAtom } from "jotai"
import { namaUser } from "./userAtom"
import Input from "@/components/atoms/Input/Input"

export default function Blog() {
    const [user, setUser] = useAtom(namaUser)
    return (
        <>
        
            {
                user?(
                    <div>Halo {user}</div>
                ) : (
                        <div>Silahkan masukkan nama anda</div>
                )
            }

            {/* <input type="text" onChange={(e) => setUser(e.target.value)} /> */}
            <Input onChange={(e) => setUser(e.target.value)}/>

            <div>Halo ini halaman blog</div>
        </>
    )
}