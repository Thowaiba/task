package com.bMisrTask.reports;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import net.sf.jasperreports.engine.JRException;

public interface JasperReportPlugin {

	public String saveReport(String path, Map<String, Object> parm, List<? extends Object> newLineList,
			 String pathJRXML, String FolderName) throws JRException, IOException;
		
	}

