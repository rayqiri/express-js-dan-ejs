'use strict';
// import db from '../config/mysql_config';
// import StudentRepo from '../repositories/student_repository';
let db = require('../config/mysql_config');
let StudentRepo = require('../repositories/student_repository');
let Student = require('../domains/student');
let saveStudentShowForm = (req, res, next) =>{
	res.render('input_siswa', {'title':'Tambah Siswa'});
};
let saveStudent = (req, res, next) =>{
   if(!req.body){
   	 next('Semua kolom harus diisi...');
   }
   let data = req.body;
   let student = new Student(data.code,data.name,data.department,parseInt(data.age));
   let studentRepo = new StudentRepo(db);
   studentRepo.save(student , result =>{
   	req.flash('sukses', 'Data Berhasil disimpan!');
   		res.redirect('/data_siswa');


   },err =>
   {
   	if(err){
   		req.flash('error', 'Data gagal disimpan!');
   		next(err);
   	}
   }

   );
};

let updateStudentShowForm = (req,res, next) =>{
	if(!req.params){
		next('Parameter tidak cocok');
	}
	let code = req.params.code;
	let studentRepo = new StudentRepo(db);
	studentRepo.findOne(code, result => {
	res.render('edit_siswa',{'student': result , 'title' : 'Edit Siswa'});
	}, err =>{
		if(err){
			next(err);
		}
	});
};

let updateStudent = (req, res, next) =>{
	if(!req.body){
   	 next('Semua kolom harus diisi...');
   }
   let data = req.body;
   let student = new Student(data.code,data.name,data.department,parseInt(data.age));
   let studentRepo = new StudentRepo(db);
   studentRepo.update(student , result =>{
   		res.redirect('/data_siswa');

   },err =>
   {
   	if(err){
   		next(err);
   	}
   }

   );	
};

let deleteStudent = (req,res,next)=>{
	if(!req.params){
		next('parameter tidak ada');
	}
	let code = req.params.code;
	let studentRepo = new StudentRepo(db);
	studentRepo.delete(code, result =>{
	req.flash('sukses', 'Data Berhasil dihapus!');
	res.redirect('/data_siswa');
	},err =>{
		if(err){
			req.flash('error', 'Data gagal dihapus!');
			next(err);
		}
	});
};

let getStudent = (req,res,next)=>{
	if(!req.params){
		next('Parameter kode tidak ada');
	}
	let code = req.params.code;
	let studentRepo = new StudentRepo(db);
	studentRepo.findOne(code, result=>{
		res.render('detail_siswa',{'student':result,'title':'Detail Siswa'});
	},err=>{
		if(err){
			next(err);
		}
	});
};
let getAllStudent = (req,res,next)=>{

	//let code = req.params.code;
	let studentRepo = new StudentRepo(db);
	studentRepo.findAll(results=>{
		res.render('data_siswa',{'students':results,'title':'Data Siswa'});
	},err=>{
		if(err){
			next(err);
		}
	});
};

module.exports = {
	saveStudentShowForm : saveStudentShowForm,
	saveStudent : saveStudent,
	updateStudent : updateStudent,
	updateStudentShowForm : updateStudentShowForm,
	deleteStudent : deleteStudent,
	getStudent : getStudent,
	getAllStudent : getAllStudent
}
