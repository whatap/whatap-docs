#!/usr/bin/env python3
"""
PDF를 Word로 일괄 변환 (로컬 테스트용)
exports/pdf 폴더의 PDF를 Word로 변환
"""

import os
import sys
from pathlib import Path

try:
    from pdf2docx import Converter
except ImportError:
    print("❌ pdf2docx 라이브러리가 필요합니다.")
    print("설치: pip install pdf2docx")
    sys.exit(1)

def convert_pdf_to_word(pdf_path, output_dir=None):
    """PDF 파일을 Word로 변환"""
    pdf_file = Path(pdf_path)
    
    if not pdf_file.exists():
        print(f"⚠️  PDF 파일을 찾을 수 없습니다: {pdf_path}")
        return False
    
    # 출력 디렉토리가 지정되지 않으면 PDF와 같은 폴더에 저장
    if output_dir is None:
        output_dir = pdf_file.parent
    else:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
    
    # 출력 파일명 (.pdf → .docx)
    word_file = output_dir / pdf_file.name.replace('.pdf', '.docx')
    
    try:
        print(f"📝 변환 중: {pdf_file.name} → {word_file.name}")
        
        cv = Converter(str(pdf_file))
        cv.convert(str(word_file), start=0, end=None)
        cv.close()
        
        print(f"✅ 변환 완료: {word_file}")
        return True
        
    except Exception as e:
        print(f"❌ 변환 실패: {pdf_file.name}")
        print(f"   오류: {e}")
        return False

def main():
    """PDF 폴더의 모든 PDF를 Word로 변환"""
    
    # 명령줄 인자로 PDF 경로 지정 가능
    if len(sys.argv) > 1:
        pdf_dir = Path(sys.argv[1])
    else:
        # 기본값: exports/pdf
        pdf_dir = Path('./exports/pdf')
    
    if not pdf_dir.exists():
        print(f"❌ PDF 폴더를 찾을 수 없습니다: {pdf_dir}")
        print(f"\n폴더를 생성하고 PDF 파일을 넣어주세요:")
        print(f"  mkdir -p {pdf_dir}")
        print(f"  cp /path/to/*.pdf {pdf_dir}/")
        sys.exit(1)
    
    # 모든 PDF 파일 찾기
    pdf_files = list(pdf_dir.glob('*.pdf'))
    
    if not pdf_files:
        print(f"⚠️  {pdf_dir} 폴더에 PDF 파일이 없습니다.")
        print(f"\nPDF 파일을 추가해주세요:")
        print(f"  cp /path/to/*.pdf {pdf_dir}/")
        sys.exit(0)
    
    print("=" * 60)
    print("📚 WhaTap PDF to Word Converter (로컬 테스트)")
    print("=" * 60)
    print(f"PDF 폴더: {pdf_dir}")
    print(f"총 {len(pdf_files)}개 파일\n")
    
    success_count = 0
    fail_count = 0
    
    for pdf_file in sorted(pdf_files):
        if convert_pdf_to_word(pdf_file):
            success_count += 1
        else:
            fail_count += 1
    
    print("\n" + "=" * 60)
    print(f"✨ 변환 완료!")
    print(f"✅ 성공: {success_count}개")
    if fail_count > 0:
        print(f"❌ 실패: {fail_count}개")
    print(f"📂 출력 위치: {pdf_dir}")
    print("=" * 60)

if __name__ == '__main__':
    main()
