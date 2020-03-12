import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer class="bg-light p-3 pt-5">
                    <ul class="list-inline text-uppercase text-center">
                        <li class="list-inline-item mx-3">
                            <a href="/" class="text-danger text-uppercase">
                                Home
                            </a>
                        </li>
                        <li class="list-inline-item mx-3">
                            <a href="/about" class="text-danger text-uppercase">
                                about
                            </a>
                        </li>
                        <li class="list-inline-item mx-3">
                            <a href="/" class="text-danger text-uppercase">
                                contact
                            </a>
                        </li>
                    </ul>

                    <h6 class="pt-3 text-center text-capitalize">
                        let's be friends
                    </h6>

                    <ul class="list-inline text-center">
                        <li class="list-inline-item mx-2">
                            <a href="https://www.facebook.com/t1t7h4" class="text-danger">
                                <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mx-2">
                            <a href="https://www.linkedin.com/" class="text-danger">
                                <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="list-inline-item mx-2">
                            <a href="https://www.instagram.com/ttr.hoa/" class="text-danger">
                                <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </footer>
            </>
        )
    }
}
