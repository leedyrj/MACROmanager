import React, { Component } from "react"
import { Modal, ModalBackground, ModalCard, ModalCardHeader, ModalCardTitle, Delete, ModalCardBody, ModalCardFooter, Button } from 'bloomer'
import APIController from "./APIController"

const RecipeModal = () => {
    return (
        <React.Fragment>
            <Modal isActive>
                <ModalBackground />
                <ModalCard>
                    <ModalCardHeader>
                        <ModalCardTitle>ModalCard Title</ModalCardTitle>
                        <Delete />
                    </ModalCardHeader>
                    <ModalCardBody>
                        {/* Your Content  */}
                    </ModalCardBody>
                    <ModalCardFooter>
                        <Button isColor='success'>Save</Button>
                        <Button isColor='warning'>Cancel</Button>
                    </ModalCardFooter>
                </ModalCard>
            </Modal>
        </React.Fragment>
    )
}

export default RecipeModal