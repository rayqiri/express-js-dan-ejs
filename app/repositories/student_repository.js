'use strict';
//import Student from '../domains/student';
let Student = require('../domains/student');
let StudentRepository = function(db){
	this.db =db;
};
StudentRepository.prototype = {
	save : function(s , cb , errCb){
		let db = this.db;
		let data = {
					 code : s.code,
					 name : s.name,
					 department : s.department,
					 age : s.age
					};
	let query = "INSERT INTO siswa SET ?";
	db.query(query, data, (err, results)=>{
		if(err){
			errCb(err);
		}
		cb(results);
	});
	},
	update : function(s, cb, errCb){
	let db = this.db;
		let data = [s.name,s.department,s.age,s.code];
	let query = "UPDATE siswa SET name=?, department=?, age =? WHERE code = ?";
	db.query(query, data, (err, results)=>{
		if(err){
			errCb(err);
		}
		cb(results);
	});
	},
	delete : function(code, cb, errCb){
	let db = this.db;
		//let data = [s.name,s.department,s.age,s.code];
	let query = "DELETE FROM siswa WHERE code = ?";
	db.query(query, code, (err, results)=>{
		if(err){
			errCb(err);
		}
		cb(results);
	});	
	},
	findOne : function(code, cb, errCb){
	let db = this.db;
		//let data = [s.name,s.department,s.age,s.code];
	let query = "SELECT * FROM siswa WHERE code = ?";
	db.query(query, code, (err, results)=>{
		if(err){
			errCb(err);
		}
		if(!results){
		cb('Data dengan Kode ${code} tidak ditemukan');	
		}else{
			let s = results[0];
			let student = new Student(s.code,s.name,s.department,s.age);
			cb(student);
		}
		
	});	
	},
	findAll : function( cb, errCb){
		let db = this.db;
		//let data = [s.name,s.department,s.age,s.code];
	let query = "SELECT * FROM siswa";
	db.query(query, (err, results)=>{
		if(err){
			errCb(err);
		}
		if(!results){
		cb('Tidak ditemukan data');	
		}else{
			let studentArray=[];
			for (let i = 0; i<results.length;i++){
			let s = results[i];
			let student = new Student(s.code,s.name,s.department,s.age);
			studentArray.push(student);
			}
			cb(studentArray);
		}
		
	});
	}
};

module.exports = StudentRepository;