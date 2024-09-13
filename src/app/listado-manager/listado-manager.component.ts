import { Component, OnInit } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model'; 
import { FILE_LIST } from '../../data/file.storage'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-manager.component.html',
  styleUrl: './listado-manager.component.css'
})
export class ListadoManagerComponent implements OnInit{
  items: FileItem[] = [];

  ngOnInit(): void {
    this.items = FILE_LIST;
  }

  isFolder(type: FileType): boolean {
    return type === FileType.FOLDER;
  }
}
