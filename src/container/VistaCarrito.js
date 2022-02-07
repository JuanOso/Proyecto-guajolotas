import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const DivPadre = styled.div`    
    border: 3px solid black;
    width: 390px;
    height: 844px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const H6 = styled.h6`
    text-align: center;    
    font-size: 17px;
    margin: auto;
`

const Div = styled.div`
    width: 90%;
    margin-left: 5%;
    display: flex; 
    align-items: center; 
    
    margin-top: 12%;
`

const Listado = styled.div`
    width: 90%;
    margin-left:5%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    
`

const Img = styled.img`
    width: 56px;
    height: 56px;
`
const Span = styled.span`
    color: rgba(250, 74, 12, 1);
    font-weight: 600;

`


const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;

`

const Totalizado = styled.div`
    width: 90%;
    margin-left: 5%;
    margin-top: 8%;
    border-radius: 25px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 15px 15px;
    justify-content: space-between;
`

const ButtonP = styled.button`
    background-color: rgba(250, 74, 12, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 69px;
    width: 90%;
    margin-left: 5%;
    color: white;
    border: none;
    border-radius: 30px;   
`


const VistaCarrito = () => {

    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState([])

    const navegar = useNavigate()

    useEffect(() => {
        setPedido(JSON.parse(localStorage.getItem('productostotales')));
    }, [])

    useEffect(() => {
        sumaTotal()
    }, [pedido])

    const sumaTotal = () => {
        let subtotales = document.getElementsByClassName('subtotal')
        let sumaSubs = 0

        for (let i = 0; i < subtotales.length; i++) {
            sumaSubs += parseInt(subtotales[i].id)
        }
        setTotal(sumaSubs)

    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const modal = () => {
        return (
            <div style={{width: "90%" }}>      
              <Modal size="sm" show={show} onHide={handleClose} dialogClassName="colornegro">
                <Modal.Header closeButton dialogClassName="colornegro">
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body dialogClassName="colornegro">Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          );
    }


    console.log(pedido, ' es pedido');

    return (
        <DivPadre>
            <div>
                <Div>
                    <i className="fas fa-chevron-left" style={{ cursor: "pointer" }} onClick={() => navegar(`/productos`)}></i>
                    <H6 className='inter' >Carrito</H6>
                </Div>
                <Listado>
                {
                modal()
            }
                    {
                        pedido.map(pr => (
                            <Card key={pr.id} onClick={handleShow}>
                                <Img src={pr.imagen} alt='' />
                                <div className='ms-3 d-flex flex-column col-6'>
                                    <p className='p-0 m-0' style={{ fontSize: 12, fontWeight: 600 }}>{pr.product}</p>
                                    <p className='p-0 m-0' style={{ fontSize: 12, color: "rgba(250, 74, 12, 1)", fontWeight: 600 }}>x{pr.cantidad}</p>
                                </div>

                                <Span style={{ fontSize: 14 }} className='ms-3 subtotal' id={pr.precio * pr.cantidad}>${pr.precio * pr.cantidad} MXN</Span>
                            </Card>
                        ))
                    }
                </Listado>
                <Totalizado>
                    <p className='my-0' style={{ fontSize: 17, fontWeight: 600 }}>Total</p>
                    <p className='my-0' style={{ fontSize: 17, color: "rgba(250, 74, 12, 1)", fontWeight: 600 }}>${total} MXN</p>
                </Totalizado>
            </div>
            <div className='mb-3'>
                <ButtonP>Pagar</ButtonP>
            </div>

        </DivPadre>
    )
}

export default VistaCarrito


/*      <div class="modal-header">
                    <div class="d-flex justify-content-center col-12">
                        <h5 class="modal-title text-center" id="modalTitle">${nombre}</h5>
                    </div>
                </div>
                <div class="modal-body">
                    <img src="${imagen}" alt="" class="col-8 offset-2"/>
                        <ul class="col-6 offset-3">
                            <li class="">Precio: $${formato_decimal(precio)}</li>
                            <li>Proveedor: ${proveedor}</li>
                            <li>Categoría: ${categoria}</li>
                            <li>Id: ${id}</li>
                        </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-dark" onclick="agregar_producto_carrito('${nombre}', ${precio}, ${id})" data-bs-dismiss="modal">Agregar al carrito</button>
                </div>*/