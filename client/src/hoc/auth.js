import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    // option
    // null  => 아무나 출입가능
    // ture  => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지
    
    // adminRoute
    // 어드민만 가능 -> true

    function AuthenticatorCheck(props) {

        const dispatch = useDispatch()

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if (option) { // option == ture  => 로그인한 유저만 출입이 가능한 페이지
                        props.history.push('/login') // 로그인페이지로 보내기
                    }
                } else { //로그인한 상태
                    if (adminRoute && !response.payload.isAdmin) { //adminRoute = ture(admin만출입) + isAdmin 아니면
                        props.history.push('/') // 랜딩페이지로
                    } else {
                        if (option === false)  // option == false => 로그인한 유저는 출입 불가능한 페이지
                            props.history.push('/') // 랜딩페이지로
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
            // <SpecificComponent {...props} />;
        )
    }

    return AuthenticatorCheck
}