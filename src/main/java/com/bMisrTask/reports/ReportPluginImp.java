package com.bMisrTask.reports;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class ReportPluginImp implements JasperReportPlugin {


	@Override
	public String saveReport(String path, Map<String, Object> parm, List<? extends Object> newLineList,
			 String pathJRXML, String FolderName)
			throws JRException, IOException {
		String pathofPdf = null;

		final InputStream stream = this.getClass().getResourceAsStream(pathJRXML);

		final JasperReport report = JasperCompileManager.compileReport(stream);

		// Fetching the list from the data source.
		final JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(newLineList);
		final JasperPrint print = JasperFillManager.fillReport(report, parm, source);

		File file;
		String userDir = System.getProperty("user.dir");

		file = new File(userDir + "/..");
		final String filePath = file.getCanonicalPath() + "/Reports/" + FolderName + "/";

		// create folder if it doesnot exists
		File outerFile = new File(filePath);
		if (!outerFile.exists()) {
			outerFile.mkdir();
		} else {

		}

		System.out.println(filePath + "-filepath from line 721");
		// Export the report to a PDF file.
		JasperExportManager.exportReportToPdfFile(print, filePath + path + ".pdf");
		pathofPdf = filePath + path + ".pdf";
		System.out.println(pathofPdf + "---------");

		// TODO Auto-generated method stub
		return pathofPdf;
	}



}
