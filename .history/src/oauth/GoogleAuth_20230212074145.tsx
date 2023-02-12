import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { oAuth } from '../utils/oauth';
const key = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU5NjJlN2EwNTljN2Y1YzBjMGQ1NmNiYWQ1MWZlNjRjZWVjYTY3YzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzYyMTU4NjUsImF1ZCI6IjYwNjA4NTc5MjE1Ni0zOWwwNTh2dGhiaWc2MWlzYnZidXZmOWEyZ21qcGNpai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMTE1MzA5MTg1NTYyNjk0MTYxMCIsImVtYWlsIjoiYmVud2ViZGV2MjlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjYwNjA4NTc5MjE1Ni0zOWwwNTh2dGhiaWc2MWlzYnZidXZmOWEyZ21qcGNpai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJCZW4gV2ViZGV2IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FFZEZUcDZxdlgtaTRuUXpyQl9LN205UG55dzBXelhSMnpFS2Mya2JIRllIPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkJlbiIsImZhbWlseV9uYW1lIjoiV2ViZGV2IiwiaWF0IjoxNjc2MjE2MTY1LCJleHAiOjE2NzYyMTk3NjUsImp0aSI6IjI1ZDEyNDlmZTBhMGE0ODc1Y2E4ZWZhMGRjM2FhMjQ2NGNiMmEyYmUifQ.bGsu1FXnEpgJjFU0zPrPHAfY5zIgty7t30i-mpA84tB3UCREBxMkU56AjUP4n4BMIIIrM9j6QgbEAR2Rbr6Bxx4M2dNH2YSP1KHrsg9OEMUs8btds7jp_tl3l80g7RMSoamOiBVs9PTgr0nmhrk87mNWXYQPabsjkSlnGo899BEh22e2VXfpptR-S7RThvfNMcnvl_56IJ4IrN2hyJnFFtoA0fDh-CEekWUMlcod4BMoWJll3QMGH6xKo2MD3Eqo8egxTmsLEufSTV3XBaj7KjMTjUGZxRkGOr-zs13O8Q3VRyG04ZKPsok4-Dq2NprE6SO0Q5wZsfl1M0LyQSKcgw"


const GoogleAuth = () => {
    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        oAuth(key, "google-oauth2")

        console.log(response)
        console.log(1234)
    }

    function handleError(error: any) {
        console.log(error)
    }
    return (
        <GoogleOAuthProvider clientId={clientId} >
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => handleError}

            />
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth