import React, { Component } from "react"
import { Container, Box } from 'bloomer'
import Navigation from "./Nav/Navbar";
import "./index.css"
import "./main.sass"

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container>
                    <Box id="box">
                        <section class="accordions">
                            <article class="accordion is-active">
                                <div class="accordion-header toggle">
                                    <p>Hello World</p>
                                </div>
                                <div class="accordion-body">
                                    <div class="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
                                </div>
                            </article>
                            <article class="accordion">
                                <div class="accordion-header">
                                    <p>Hello World</p>
                                    <button class="toggle" aria-label="toggle"></button>
                                </div>
                                <div class="accordion-body">
                                    <div class="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
                                </div>
                            </article>
                            <article class="accordion">
                                <div class="accordion-header">
                                    <p>Hello World</p>
                                    <button class="toggle" aria-label="toggle"></button>
                                </div>
                                <div class="accordion-body">
                                    <div class="accordion-content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
                                </div>
                            </article>
                        </section>
                    </Box>
                </Container>
            </React.Fragment>
        )
    }
}