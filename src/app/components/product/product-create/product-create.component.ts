import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    id: 0
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void { }

  createProduct(): void{

    //RESPONSÁVEL POR MOSTRAR MENSAGEM E TROCAR DE PÁGINA QUANDO O PRODUTO FOR CRIADO
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!')//MOSTRA A MENSAGEM DE PRODUTO CRIADO
      this.router.navigate(['/products'])//MUDA PARA PÁGINA DE PRODUTOS
    })

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
